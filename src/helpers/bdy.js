export const getBdy = page => {
  return {
    pagination: {
      page: page,
      size: 35,
    },
    sort: {
      order: 'desc',
      term: 'relevance',
    },
    filters: {
      price: {
        from: 10000,
        to: 21000,
      },
      priceRank: [],
      bodyTypeIds: [1],
      categories: {
        category1Ids: [2500],
      },
      contractId: 0,
      doors: {
        from: 5,
        to: null,
      },
      drivenWheelsIds: [],
      entry: null,
      environmentalLabels: [],
      equipments: [],
      fuelTypeIds: [2, 4],
      hasPhoto: true,
      hasStock: null,
      hasWarranty: null,
      hp: {
        from: null,
        to: null,
      },
      isCertified: false,
      km: {
        from: null,
        to: 100000,
      },
      luggageCapacity: {
        from: null,
        to: null,
      },
      maxTerms: null,
      onlyPeninsula: false,
      offerTypeIds: [0, 1, 2, 3, 4, 5],
      provinceIds: [],
      rating: {
        from: null,
        to: null,
      },
      searchText: null,
      sellerTypeId: 0,
      transmissionTypeId: 1,
      vehicles: [
        { make: 'AUDI', makeId: 4, model: '', modelId: 0 },
        { make: 'BMW', makeId: 7, model: '', modelId: 0 },
        { make: 'MERCEDES-BENZ', makeId: 28, model: '', modelId: 0 },
        { make: 'SEAT', makeId: 39, model: 'Leon', modelId: 410 },
        { make: 'TOYOTA', makeId: 46, model: '', modelId: 0 },
        { make: 'OPEL', makeId: 32, model: 'Astra', modelId: 67 },
        { make: 'OPEL', makeId: 32, model: 'Astra Electric', modelId: 1514 },
        { make: 'OPEL', makeId: 32, model: 'Astra PHEV', modelId: 1399 },
        { make: 'VOLKSWAGEN', makeId: 47, model: '', modelId: 0 },
        { make: 'HONDA', makeId: 69, model: '', modelId: 0 },
        { make: 'MAZDA', makeId: 27, model: '', modelId: 0 },
        { make: 'MINI', makeId: 222, model: '', modelId: 0 },
      ],
      year: {
        from: 2020,
        to: null,
      },
    },
  }
}
