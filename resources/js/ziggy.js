const Ziggy = {
    url: "http://localhost",
    port: null,
    defaults: {},
    routes: {
        "sanctum.csrf-cookie": {
            uri: "sanctum/csrf-cookie",
            methods: ["GET", "HEAD"],
        },
        "ignition.healthCheck": {
            uri: "_ignition/health-check",
            methods: ["GET", "HEAD"],
        },
        "ignition.executeSolution": {
            uri: "_ignition/execute-solution",
            methods: ["POST"],
        },
        "ignition.updateConfig": {
            uri: "_ignition/update-config",
            methods: ["POST"],
        },
        "users.create": { uri: "admin/users/create", methods: ["POST"] },
        "admin.users.assign-role": {
            uri: "admin/users/assign-role",
            methods: ["POST"],
        },
        "admin.roles.index": { uri: "admin/roles", methods: ["GET", "HEAD"] },
        "admin.roles.store": { uri: "admin/roles", methods: ["POST"] },
        "admin.roles.edit": {
            uri: "admin/roles/{role}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["role"],
            bindings: { role: "id" },
        },
        "admin.roles.update": {
            uri: "admin/roles/{role}",
            methods: ["PUT"],
            parameters: ["role"],
            bindings: { role: "id" },
        },
        "admin.roles.destroy": {
            uri: "admin/roles/{role}",
            methods: ["DELETE"],
            parameters: ["role"],
            bindings: { role: "id" },
        },
        "admin.user-role-dashboard.index": {
            uri: "admin/user-role-dashboard",
            methods: ["GET", "HEAD"],
        },
        "admin.events-dashboard": {
            uri: "events-dashboard",
            methods: ["GET", "HEAD"],
        },
        "gallery-images.store": {
            uri: "admin/gallery-images/store",
            methods: ["POST"],
        },
        "admin.textileDetail.edit": {
            uri: "admin/textileDetail/{id}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        "textileDetail.update": {
            uri: "textileDetail/{id}",
            methods: ["PUT"],
            parameters: ["id"],
        },
        "textileDetail.destroy": {
            uri: "textileDetail/{id}",
            methods: ["DELETE"],
            parameters: ["id"],
        },
        "admin.events.create": {
            uri: "admin/events/create",
            methods: ["GET", "HEAD"],
        },
        "admin.events.edit": {
            uri: "admin/events/{id}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        "admin.events.store": { uri: "admin/events", methods: ["POST"] },
        "event.update": {
            uri: "events/{id}",
            methods: ["PUT"],
            parameters: ["id"],
        },
        "event.destroy": {
            uri: "events/{id}",
            methods: ["DELETE"],
            parameters: ["id"],
        },
        dashboard: { uri: "dashboard", methods: ["GET", "HEAD"] },
        "admin.textiles-dashboard": {
            uri: "textiles-dashboard",
            methods: ["GET", "HEAD"],
        },
        "researcher.get-bookmarks": {
            uri: "researcher/bookmarks",
            methods: ["GET", "HEAD"],
        },
        "researcher.bookmark": {
            uri: "bookmark/{galleryImageId}",
            methods: ["POST"],
            parameters: ["galleryImageId"],
        },
        "delete-bookmark": {
            uri: "delete-bookmark/{id}",
            methods: ["DELETE"],
            parameters: ["id"],
        },
        events: { uri: "events", methods: ["GET", "HEAD"] },
        "textile-details.show": {
            uri: "textile-details/{id}",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        galleryImages: { uri: "galleryImages", methods: ["GET", "HEAD"] },
        home: { uri: "/", methods: ["GET", "HEAD"] },
        collectionPageImages: {
            uri: "collectionPageImages",
            methods: ["GET", "HEAD"],
        },
        "event.registerPage": {
            uri: "event/{eventId}/registerPage",
            methods: ["GET", "HEAD"],
            parameters: ["eventId"],
        },
        "event.eventRegister.store": {
            uri: "event/{eventId}/eventRegister",
            methods: ["POST"],
            parameters: ["eventId"],
        },
        about: { uri: "about", methods: ["GET", "HEAD"] },
        contact: { uri: "contact", methods: ["GET", "HEAD"] },
        "events.previous": {
            uri: "events/previousEvents",
            methods: ["GET", "HEAD"],
        },
        "events.show": {
            uri: "events/{id}",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        collection: { uri: "collection", methods: ["GET", "HEAD"] },
        arpillera: { uri: "arpillera", methods: ["GET", "HEAD"] },
        banner: { uri: "banner", methods: ["GET", "HEAD"] },
        quilt: { uri: "quilt", methods: ["GET", "HEAD"] },
        "embroidered-cloth": {
            uri: "embroidered-cloth",
            methods: ["GET", "HEAD"],
        },
        "wall-hanging": { uri: "wall-hanging", methods: ["GET", "HEAD"] },
        installation: { uri: "installation", methods: ["GET", "HEAD"] },
        "gallery_images.search": { uri: "search", methods: ["GET", "HEAD"] },
        "search-page": { uri: "search-page", methods: ["GET", "HEAD"] },
        "profile.edit": { uri: "profile", methods: ["GET", "HEAD"] },
        "profile.update": { uri: "profile", methods: ["PATCH"] },
        "profile.destroy": { uri: "profile", methods: ["DELETE"] },
        register: { uri: "register", methods: ["GET", "HEAD"] },
        login: { uri: "login", methods: ["GET", "HEAD"] },
        "password.request": {
            uri: "forgot-password",
            methods: ["GET", "HEAD"],
        },
        "password.email": { uri: "forgot-password", methods: ["POST"] },
        "password.reset": {
            uri: "reset-password/{token}",
            methods: ["GET", "HEAD"],
            parameters: ["token"],
        },
        "password.store": { uri: "reset-password", methods: ["POST"] },
        "verification.notice": {
            uri: "verify-email",
            methods: ["GET", "HEAD"],
        },
        "verification.verify": {
            uri: "verify-email/{id}/{hash}",
            methods: ["GET", "HEAD"],
            parameters: ["id", "hash"],
        },
        "verification.send": {
            uri: "email/verification-notification",
            methods: ["POST"],
        },
        "password.confirm": {
            uri: "confirm-password",
            methods: ["GET", "HEAD"],
        },
        "password.update": { uri: "password", methods: ["PUT"] },
        logout: { uri: "logout", methods: ["POST"] },
    },
};

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
