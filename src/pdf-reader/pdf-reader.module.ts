import { Module } from '@nestjs/common';
import { PdfReaderController } from './pdf-reader.controller';
import { PdfReaderService } from './pdf-reader.service';

@Module({
  controllers: [PdfReaderController],
  providers: [PdfReaderService]
})

export class PdfReaderModule {}
