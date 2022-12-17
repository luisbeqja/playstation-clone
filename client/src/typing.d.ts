import { SanityAsset } from '@sanity/image-url/lib/types/types';

export interface PsPlussBannerType {
    _createdAt: String
    _id: String
    _rev: String
    _type: String
    _updatedAt: String
    button: String
    text: String
    urlImg: SanityAsset
    urlImgGames: SanityAsset
    urlImgLogo: SanityAsset
}

export interface firstBannerData {
    _createdAt: String
    _id: String
    _rev: String
    _type: String
    _updatedAt: String
    button: String
    text: String
    textPosition: String
    textTheme: String
    title: String
    urlImg: SanityAsset
    urlImgLogo: SanityAsset
    urlImgPaginator: SanityAsset
}

export interface secondBannerData {
    _createdAt: String
    _id: String
    _rev: String
    _type: String
    _updatedAt: String
    button: String
    text: String
    title: String
    urlImg: SanityAsset
}
