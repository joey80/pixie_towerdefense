const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

class Scaffold {
  className: string;
  location: string;

  constructor(className: string, location = 'src/classes') {
    this.className = className;
    this.location = location;
    this.scaffoldClass();
  }

  saveFile(fileName: string, fileContents: string) {
    const outputFilePath = path.join(this.location, fileName);

    fs.writeFileSync(
      path.resolve(process.cwd(), outputFilePath),
      prettier.format(fileContents, { parser: 'babel' }),
      'utf-8'
    );
    return outputFilePath;
  }

  scaffoldClass() {
    const template = `
    type ${this.className}Type = {
      x: number;
      y: number;
    };

    interface ${this.className} extends ${this.className}Type {}

    class ${this.className} implements ${this.className}Type {
      constructor({ x, y }: ${this.className}Type) {
        this.x = x;
        this.y = y;
      }
    }

    export type { ${this.className}Type };
    export default ${this.className};`;
    this.saveFile(`${this.className}.ts`, template);
  }
}

let className = process.argv[2];
const fileLocation = process.argv[3];

if (!className) {
  throw 'Class name was not passed';
} else {
  className = className.charAt(0).toUpperCase() + className.slice(1);
  new Scaffold(className, fileLocation);
}
