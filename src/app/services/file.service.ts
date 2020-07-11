import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private _http: HttpClient) { }

  upload(file: Blob): Promise<string>
  upload(files: Blob[]): Promise<string[]>
  upload(files: any): Promise<string | string[]> {
    return new Promise((resolve, reject) => {
      const singleFile: boolean = !Array.isArray(files);
      const formData = new FormData();

      if (singleFile)
        formData.append('file', files);
      else
        files.map((picture) => formData.append('file', picture));

      this._http.post<string[]>('files', formData)
        .subscribe({
          next: (data) => resolve(singleFile ? data.pop() : data),
          error: (err) => reject(err)
        });
    });
  }
}