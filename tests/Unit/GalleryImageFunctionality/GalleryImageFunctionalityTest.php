<?php

namespace Tests\Unit\GalleryImageFunctionality;

use Tests\TestCase; // Ensure this is Laravel's TestCase, not PHPUnit's
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\GalleryImage;

class GalleryImageFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_a_gallery_image()
    {
        // Data for creating a gallery image
        $imageData = [
            'image' => 'path/to/image.jpg',
            'location' => 'London',
            'title' => 'Artwork Title',
            'type' => 'Painting',
            'description' => 'A detailed description of the artwork.',
            'year_produced' => 2020,
            'size' => '200x200',
            'materials' => 'Oil on canvas',
            'provenance' => 'A history of ownership',
            'country_of_origin' => 'UK',
            'authenticity' => 'Verified',
            'maker' => 'John Doe',
            'owner' => 'Jane Smith',
            'photographer' => 'Photographer Name'
        ];

        // Create the gallery image
        $galleryImage = GalleryImage::create($imageData);

        // Fetch the gallery image back from the database to verify it was saved correctly
        $fetchedImage = GalleryImage::first();

        // Assertions to ensure data was saved correctly
        $this->assertNotNull($fetchedImage);
        $this->assertEquals($imageData['image'], $fetchedImage->image);
        $this->assertEquals($imageData['location'], $fetchedImage->location);
        $this->assertEquals($imageData['title'], $fetchedImage->title);
        $this->assertEquals($imageData['type'], $fetchedImage->type);
        $this->assertEquals($imageData['description'], $fetchedImage->description);
        $this->assertEquals($imageData['year_produced'], $fetchedImage->year_produced);
        $this->assertEquals($imageData['size'], $fetchedImage->size);
        $this->assertEquals($imageData['materials'], $fetchedImage->materials);
        $this->assertEquals($imageData['provenance'], $fetchedImage->provenance);
        $this->assertEquals($imageData['country_of_origin'], $fetchedImage->country_of_origin);
        $this->assertEquals($imageData['authenticity'], $fetchedImage->authenticity);
        $this->assertEquals($imageData['maker'], $fetchedImage->maker);
        $this->assertEquals($imageData['owner'], $fetchedImage->owner);
        $this->assertEquals($imageData['photographer'], $fetchedImage->photographer);
    }
}
