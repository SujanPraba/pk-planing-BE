declare const _default: (() => {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    dropSchema: boolean;
    logging: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    dropSchema: boolean;
    logging: boolean;
}>;
export default _default;
