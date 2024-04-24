<?php

namespace Tests\Feature\CollectionPage;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\CollectionPageImage;
use App\Models\GalleryImage;



class CollectionPageImagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_method_returns_correct_view_with_data()
    {
        // Arrange: create dummy data
        CollectionPageImage::factory()->count(5)->create();
        GalleryImage::factory()->create(['country_of_origin' => 'USA']);
        GalleryImage::factory()->create(['country_of_origin' => 'France']);
        GalleryImage::factory()->create(['country_of_origin' => 'USA']); // duplicate country to test distinct

        // Act: make a request to the index method
        $response = $this->get('/collectionPageImages');

        // Assert: correct view is rendered with expected data
        $response->assertStatus(200);
        $response->assertInertia(
            fn($assert) => $assert
                ->component('Collection/Collection')
                ->has('collectionPageImages', 5) // check that 5 images are passed
                ->has('countries', 2) // should be two distinct countries
        );
    }
}
