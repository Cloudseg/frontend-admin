export class ImageHelper {

  static blobToB64(blob: Blob): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.toString());
      reader.readAsDataURL(blob);
    });
  }

  static b64toBlob = (b64Data: string, contentType: string = '', sliceSize: number = 512): Blob => {

    if (!contentType)
      contentType = ImageHelper.getB64Type(b64Data);

    if (b64Data.includes('base64,'))
      b64Data = b64Data.split('base64,')[1];

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  static getB64Type = (b64Data: string, prefix: boolean = false): string => {
    const type = b64Data.slice(b64Data.indexOf('/') + 1, b64Data.indexOf(';'));
    return `${prefix ? '' : 'image/'}${type}`;
  }
}