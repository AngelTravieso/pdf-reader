import { Controller, Get } from '@nestjs/common';

@Controller('pdf-reader')
export class PdfReaderController {

    @Get()
    getPdf() {
        return 'Reading PDF...';
    }

}
