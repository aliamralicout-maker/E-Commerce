

export interface listingResponse <ty>{
    results: number,
    metadata: metaData,
    data: ty[],
}


interface metaData{
    currentPage: number,
    limit: number,
    numberOfPages: number,
}

