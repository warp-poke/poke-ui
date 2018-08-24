export interface PokeCheck {
    check_id: string,
    service_id: string,
    name?: string,
    secure: boolean,
    path: string,
    status?: string | number | boolean,
    gts?: Gts,
}


export interface PokeService {
    service_id: string,
    user_id: string,
    name?: string,
    domain: string,
    checks: Array<PokeCheck>,
}

export interface Gts {
    c: string,
    l: {
        [dynamic:string]: string,
    },
    a: {
        [dynamic:string]: string,
    },
    v: Array<Array<string | boolean | number>>
}

export interface c3Gts {
    xs: {
        [dynamic:string]: string,
    },
    types: {
        [dynamic:string]: string,
    },
    names: {
        [dynamic:string]: string,
    },
    colors: {
        [dynamic:string]: string,
    },
    columns: Array<Array<string | boolean | number>>,
}

export interface PokeConf {
    warpEndpoint: string;
    pokeApiEndpoint: string;
}