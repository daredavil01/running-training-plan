import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export the training plan to PDF with optimized file size
 */
export async function exportToPDF(elementId: string = 'results', fileName: string = 'training-plan.pdf') {
  try {
    // Get the element to convert
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }
    
    // Hide no-print elements temporarily
    const noPrintElements = element.querySelectorAll('.no-print');
    noPrintElements.forEach((el) => {
      (el as HTMLElement).style.display = 'none';
    });

    // Create canvas from HTML with optimized settings
    const canvas = await html2canvas(element, {
      scale: 1.2, // Reduced from 2 to decrease file size while maintaining quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // Restore no-print elements
    noPrintElements.forEach((el) => {
      (el as HTMLElement).style.display = '';
    });

    // PDF dimensions with margins
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Margins (in mm)
    const marginLeft = 10;
    const marginRight = 10;
    const marginTop = 15;
    const marginBottom = 15;
    
    const contentWidth = pdfWidth - marginLeft - marginRight;
    const contentHeight = pdfHeight - marginTop - marginBottom;

    // Convert canvas to JPEG with compression for smaller file size
    const imgData = canvas.toDataURL('image/jpeg', 0.85); // 0.85 quality for good balance
    
    const imgWidth = contentWidth;
    const imgHeight = (canvas.height * contentWidth) / canvas.width;
    
    // Calculate number of pages needed
    let heightLeft = imgHeight;
    let position = marginTop;
    let page = 1;

    // Add first page
    pdf.addImage(imgData, 'JPEG', marginLeft, position, imgWidth, imgHeight);
    heightLeft -= contentHeight;

    // Add additional pages if needed
    while (heightLeft > 0) {
      pdf.addPage();
      position = marginTop - (contentHeight * page);
      pdf.addImage(imgData, 'JPEG', marginLeft, position, imgWidth, imgHeight);
      heightLeft -= contentHeight;
      page++;
    }

    // Add footer with page numbers
    const pageCount = pdf.internal.pages.length - 1; // Subtract 1 because of internal page
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150);
      pdf.text(
        `Page ${i} of ${pageCount}`,
        pdfWidth / 2,
        pdfHeight - 5,
        { align: 'center' }
      );
    }

    // Save the PDF
    pdf.save(fileName);

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}

/**
 * Print the training plan
 */
export function printTrainingPlan() {
  window.print();
}

