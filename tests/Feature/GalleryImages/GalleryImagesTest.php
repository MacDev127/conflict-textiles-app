<?php

namespace Tests\Feature\GalleryImages;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Models\GalleryImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use App\Models\Role;  // Add this line
use App\Models\User;




class GalleryImagesTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp(); {
            parent::setUp();

            $adminRole = Role::where('name', 'admin')->firstOrFail(); // Ensure the 'admin' role exists.
            $userRole = Role::where('name', 'user')->firstOrFail(); // Ensure the 'user' role exists.

            $this->user = User::factory()->create(['role_id' => $userRole->id]);
            $this->admin = User::factory()->create(['role_id' => $adminRole->id]);
        }

    }

    /** @test */
    public function users_can_view_all_gallery_images()
    {
        GalleryImage::factory()->count(5)->create();

        $response = $this->actingAs($this->user)->get('/galleryImages');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Home/Home')
            ->has('galleryImages', 5));
    }

    /** @test */
    public function an_admin_can_view_arpillera_images()
    {
        GalleryImage::factory()->count(3)->state(['type' => 'arpillera'])->create();

        $response = $this->actingAs($this->admin)->get('/arpillera');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Arpillera/Arpillera')
            ->has('galleryImages', 3));
    }


    /** @test */
    public function an_admin_can_view_banner_images()
    {
        GalleryImage::factory()->count(3)->state(['type' => 'banner'])->create();

        $response = $this->actingAs($this->admin)->get('/banner');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Banner/Banner')
            ->has('galleryImages', 3));
    }

    /** @test */
    public function an_admin_can_view_quilt_images()
    {
        GalleryImage::factory()->count(3)->state(['type' => 'quilt'])->create();

        $response = $this->actingAs($this->admin)->get('/quilt');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Quilt/Quilt')
            ->has('galleryImages', 3));
    }

    /** @test */
    public function an_admin_can_upload_an_image()
    {
        Storage::fake('public');
        $file = UploadedFile::fake()->image('banner.jpg');

        $response = $this->actingAs($this->admin)->post('/admin/gallery-images/store', [
            'image' => $file,
            'type' => 'banner',
            'title' => 'A new banner',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('gallery_images', ['title' => 'A new banner']);
        Storage::disk('public')->assertExists('gallery_images/' . $file->hashName());
    }

    /** @test */
    public function an_admin_can_update_an_image()
    {
        $galleryImage = GalleryImage::factory()->create(['title' => 'Old Title']);

        $response = $this->actingAs($this->admin)->put("/textileDetail/{$galleryImage->id}", [
            'title' => 'Updated Title',
            // other fields to update
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('gallery_images', ['title' => 'Updated Title']);
    }

    /** @test */
    public function an_admin_can_delete_an_image()
    {
        $galleryImage = GalleryImage::factory()->create();

        $response = $this->actingAs($this->admin)->delete("/textileDetail/{$galleryImage->id}");

        $response->assertRedirect();
        $this->assertDatabaseMissing('gallery_images', ['id' => $galleryImage->id]);
    }

}