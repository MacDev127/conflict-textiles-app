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

        // Creating the researcher role and a researcher user
        $researcherRole = Role::firstOrCreate(['name' => 'researcher']);
        $this->researcher = User::factory()->create(['role_id' => $researcherRole->id]);
    }



    /** @test */
    public function researcher_can_view_dashboard_with_bookmarks()
    {
        Bookmark::factory()->count(3)->create(['user_id' => $this->researcher->id]);

        $response = $this->actingAs($this->researcher)->get('/researcher-dashboard');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Admin/Dashboards/ResearchDashboard/ResearchDashboard')
            ->has('bookmarks', 3));
    }

    /** @test */
    public function researcher_can_add_a_bookmark()
    {
        $galleryImage = GalleryImage::factory()->create();
        $response = $this->actingAs($this->researcher)->post("/bookmark/{$galleryImage->id}");

        $response->assertRedirect();
        $this->assertDatabaseHas('bookmarks', [
            'user_id' => $this->researcher->id,
            'gallery_image_id' => $galleryImage->id
        ]);
    }

    /** @test */
    public function researcher_cannot_add_duplicate_bookmark()
    {
        $galleryImage = GalleryImage::factory()->create();
        Bookmark::create(['user_id' => $this->researcher->id, 'gallery_image_id' => $galleryImage->id]);

        $response = $this->actingAs($this->researcher)->post("/bookmark/{$galleryImage->id}");

        $response->assertRedirect();
        $response->assertSessionHas('error', 'Bookmark already exists!');
    }

    /** @test */
    public function researcher_can_delete_a_bookmark()
    {
        $bookmark = Bookmark::factory()->create(['user_id' => $this->researcher->id]);

        $response = $this->actingAs($this->researcher)->delete("/delete-bookmark/{$bookmark->id}");

        $response->assertJson(['success' => 'Bookmark removed successfully.']);
        $this->assertDatabaseMissing('bookmarks', ['id' => $bookmark->id]);
    }
}
