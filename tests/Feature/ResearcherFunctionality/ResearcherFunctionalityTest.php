<?php

namespace Tests\Feature\ResearcherFunctionality;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Role;
use App\Models\User;
use App\Models\Bookmark;
use App\Models\GalleryImage;

class ResearcherFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    protected $researcher;

    public function setUp(): void
    {
        parent::setUp();

        // Create or retrieve the researcher role
        $researcherRole = Role::firstOrCreate(['name' => 'researcher']);

        // Create a user and directly assign the researcher role
        $this->researcher = User::factory()->create(['role_id' => $researcherRole->id]);
    }

    /** @test */
    public function researcher_can_view_bookmarks()
    {
        Bookmark::factory()->count(3)->create(['user_id' => $this->researcher->id]);

        $response = $this->actingAs($this->researcher)->get('/bookmarks');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Bookmarks/Bookmarks')
            ->has('bookmarks', 3));
    }

    // ** @test */
    public function researcher_can_toggle_bookmark_to_add()
    {
        $galleryImage = GalleryImage::factory()->create();

        $response = $this->actingAs($this->researcher)->post("/toggle-bookmark/{$galleryImage->id}");

        $response->assertStatus(200);  // Verify that the response is OK
        $response->assertInertia(
            fn($page) => $page
                ->component('Bookmarks/Bookmarks')
                ->has('isBookmarked', true)  // Check that 'isBookmarked' property exists and is true
        );
        $this->assertDatabaseHas('bookmarks', [
            'user_id' => $this->researcher->id,
            'gallery_image_id' => $galleryImage->id
        ]);
    }

    /** @test */
    public function researcher_can_toggle_bookmark_to_remove()
    {
        $galleryImage = GalleryImage::factory()->create();
        $bookmark = Bookmark::create([
            'user_id' => $this->researcher->id,
            'gallery_image_id' => $galleryImage->id
        ]);

        $response = $this->actingAs($this->researcher)->post("/toggle-bookmark/{$galleryImage->id}");

        $response->assertRedirect();  // Expect a redirect instead of 200 OK
        $response->assertSessionHas('isBookmarked', false);  // Check that session has 'isBookmarked' as false

        $this->assertDatabaseMissing('bookmarks', [
            'id' => $bookmark->id
        ]);
    }


    /** @test */
    public function researcher_can_delete_a_bookmark()
    {
        $bookmark = Bookmark::factory()->create(['user_id' => $this->researcher->id]);

        $response = $this->actingAs($this->researcher)->delete("/delete-bookmark/{$bookmark->id}");

        $response->assertRedirect();
        $this->assertDatabaseMissing('bookmarks', ['id' => $bookmark->id]);
    }
}

