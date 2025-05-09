"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(3000);
        logger.log('Application started successfully on port 3000');
    }
    catch (error) {
        logger.error(`Failed to start application: ${error.message}`);
        throw error;
    }
}
bootstrap();
//# sourceMappingURL=main.js.map