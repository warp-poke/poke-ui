export interface PokeCheck {
    check_id: string,
    service_id: string,
    secure: boolean,
    path: string,
}


export interface PokeService {
    service_id: string,
    user_id: string,
    domain: string,
    checks: Array<PokeCheck>,
}