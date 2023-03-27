"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [
                'amqps://rtbjqfiq:gn1RuPc0hbEqAxVTfb4yhjidPs1mcjSf@chimpanzee.rmq.cloudamqp.com/rtbjqfiq',
            ],
            queue: 'main_queue',
            queueOptions: {
                durable: false,
            },
        },
    });
    await app.listen();
    console.log(`Microservice is listening`);
}
bootstrap();
//# sourceMappingURL=listener.js.map