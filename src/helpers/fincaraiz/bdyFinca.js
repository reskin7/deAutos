export const bdy = {
    "filter": {
        "offer": {
            "slug": [
                "rent"
            ]
        },
        "property_type": {
            "slug": [
                "apartment"
            ]
        },
        "locations": {
            "cities": {
                "slug": [
                    "colombia-antioquia-5500001-envigado"
                ]
            }
        },
        "price": {
            "gte": 1500000,
            "lte": 2000000
        },
        "rooms": {
            "id": {
                "gte": 2
            }
        },
        "area": {
            "gte": 75
        },
        "baths": {
            "id": {
                "gte": 2
            }
        },
        "garages": {
            "id": {
                "gte": 1
            }
        }
    },
    "fields": {
        "exclude": [],
        "facets": [
            "rooms.slug",
            "baths.slug",
            "locations.countries.slug",
            "locations.states.slug",
            "locations.cities.slug",
            "locations.neighbourhoods.slug",
            "locations.groups.slug",
            "locations.groups.subgroups.slug",
            "offer.slug",
            "property_type.slug",
            "categories.slug",
            "stratum.slug",
            "age.slug",
            "media.floor_plans.with_content",
            "media.photos.with_content",
            "media.videos.with_content",
            "products.slug",
            "is_new"
        ],
        "include": [
            "area",
            "baths.id",
            "baths.name",
            "baths.slug",
            "client.client_type",
            "client.company_name",
            "client.first_name",
            "client.fr_client_id",
            "client.last_name",
            "client.logo.full_size",
            "garages.name",
            "is_new",
            "locations.cities.fr_place_id",
            "locations.cities.name",
            "locations.cities.slug",
            "locations.countries.fr_place_id",
            "locations.countries.name",
            "locations.countries.slug",
            "locations.groups.name",
            "locations.groups.slug",
            "locations.groups.subgroups.name",
            "locations.groups.subgroups.slug",
            "locations.neighbourhoods.fr_place_id",
            "locations.neighbourhoods.name",
            "locations.neighbourhoods.slug",
            "locations.states.fr_place_id",
            "locations.states.name",
            "locations.states.slug",
            "locations.location_point",
            "max_area",
            "max_price",
            "media.photos.list.image.full_size",
            "media.photos.list.is_main",
            "media.videos.list.is_main",
            "media.videos.list.video",
            "media.logo.full_size",
            "min_area",
            "min_price",
            "offer.name",
            "price",
            "products.configuration.tag_id",
            "products.configuration.tag_name",
            "products.label",
            "products.name",
            "products.slug",
            "property_id",
            "property_type.name",
            "fr_property_id",
            "fr_parent_property_id",
            "rooms.id",
            "rooms.name",
            "rooms.slug",
            "stratum.name",
            "title"
        ],
        "limit": 25,
        "offset": 0,
        "ordering": [],
        "platform": 41,
        "with_algorithm": true
    }
}