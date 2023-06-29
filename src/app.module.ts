import { Module } from '@nestjs/common';
import { PdfReaderModule } from './pdf-reader/pdf-reader.module';

@Module({
  imports: [ PdfReaderModule ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
