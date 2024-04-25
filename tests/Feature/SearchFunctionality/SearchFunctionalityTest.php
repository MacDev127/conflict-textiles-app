<?php

namespace Tests\Feature\SearchFunctionality;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\GalleryImage;
use App\Models\User;
use App\Models\Role;  // Add this line



class SearchFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        // Set up necessary roles and permissions if you're using a package like Spatie Permission
    }

    public function test_basic_search_functionality()
    {
        // Arrange: Create dummy data
        GalleryImage::factory()->create([
            'title' => 'A Beautiful Landscape',
            'type' => 'Painting',
            'maker' => 'John Doe',
            'country_of_origin' => 'USA',
            'year_produced' => '1990',
            'image' => 'images/landscape.jpg'
        ]);

        $response = $this->get('/search?keyword=Landscape');

        $response->assertStatus(200);
        $response->assertInertia(
            fn($assert) => $assert
                ->component('Search/Search')
                ->has('galleryImages', 1)
                ->where('galleryImages.0.title', 'A Beautiful Landscape')
        );
    }

    public function test_advanced_search_access_for_researcher_role()
    {
        $role = Role::where('name', 'researcher')->firstOrFail();
        $researcher = User::factory()->create(['role_id' => $role->id]);

        $response = $this->actingAs($researcher)->get('/search?type=Painting&date_start=1980&date_end=2000');
        $response->assertStatus(200);
        $response->assertInertia(fn($assert) => $assert
            ->component('Search/Search')
            ->has('galleryImages'));
    }



}
