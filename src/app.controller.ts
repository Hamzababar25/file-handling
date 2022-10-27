import { Controller, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  // @Post()
  // @UseInterceptors(
  //   FileInterceptor('image'),
  // )
  // async uploadedFile(@UploadedFile() file) {
  //     const response = await UploadFile(file)
  //     return response;
  // }


  @Post()
  /* @UseInterceptors(
    FileInterceptor('image'),
  ) */
  async uploadedFile(@Req() req: any) {
    //const response = await UploadFile(file)
    let sampleFile = req.files.file;
    let uploadPath = './files/' + sampleFile.name;

    // Use the mv() method to place the file somewhere on your server
    const d=await(sampleFile.mv(uploadPath))
      return d;
  }


  
@Post('appending')
async appendFile(){
  var fss = require('fs');

fss.appendFile('ddfdbbbfdb.txt', 'Hello content!....ma', function (err) {
  if (err) throw err;
  console.log('Saved!');
  //fs.readFileSync("fc2b2ea692ac15b683692968f28c57cf", "utf8")
});
}


}
