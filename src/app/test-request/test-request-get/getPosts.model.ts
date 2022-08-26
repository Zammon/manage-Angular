export interface postmodel {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export interface products {
    id?: number;
    idproduct?: string;
    name: string;
    price?: number;
    details?: string;
    packDate?: string;
    type?: string;
    sales?: number;
}