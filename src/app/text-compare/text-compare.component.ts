import { Component } from '@angular/core';

@Component({
  selector: 'app-text-comparison',
  templateUrl:'./text-compare.component.html' ,
  styleUrls: ['./text-compare.component.css']
})
export class TextcompareComponent {
  text1 = '';
  text2 = '';
  differences: { lineNumber: number; formattedLine: string }[] = [];

  compareText() {
    this.differences = [];
    const lines1 = this.text1.split('\n');
    const lines2 = this.text2.split('\n');
    const maxLines = Math.max(lines1.length, lines2.length);

    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';

      const formattedLine = this.highlightDifferences(line1, line2);
      if (formattedLine) {
        this.differences.push({
          lineNumber: i + 1,
          formattedLine: formattedLine
        });
      }
    }

    if (this.differences.length === 0) {
      this.differences.push({ lineNumber: 0, formattedLine: 'لا توجد اختلافات!' });
    }
  }

  highlightDifferences(line1: string, line2: string): string {
    let result = '';
    const maxLength = Math.max(line1.length, line2.length);

    for (let i = 0; i < maxLength; i++) {
      const char1 = line1[i] || '';
      const char2 = line2[i] || '';

      if (char1 !== char2) {
        if (char1) {
          result += `<span class="highlight">${char1}</span>`;
        }
        if (char2) {
          result += `<span class="highlight">${char2}</span>`;
        }
      }
    }

    return  result ; // إرجاع null إذا لم يكن هناك أي اختلاف
  }
 }
