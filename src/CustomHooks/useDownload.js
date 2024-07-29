import { useCallback } from 'react';
import { jsPDF } from 'jspdf';

const useDownloadPdf = (doc) => {
  const handleDownload = useCallback(() => {
    if (!doc.category || !doc.description || !doc.image) {
      alert("Document details are incomplete");
      return;
    }

    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 10;
      const textWidth = pageWidth - 2 * margin;

      // Add Category
      pdf.setFontSize(14);
      pdf.text(`Category: ${doc.category}`, margin, 20);

      pdf.setFontSize(12);
      const descriptionLines = pdf.splitTextToSize(
        `Description: ${doc.description}`,
        textWidth
      );
      pdf.text(descriptionLines, margin, 30);

      // Add Image
      const img = new Image();
      img.src = doc.image;

      img.onload = () => {
        pdf.addImage(img, "PNG", margin, 50, 180, 160);

        // Save the PDF
        pdf.save(`${doc.category}.pdf`);
      };

      img.onerror = (error) => {
        alert("Failed to load the image", error);
      };
    } catch (error) {
      alert("Failed to generate the PDF", error);
    }
  }, [doc]);

  return handleDownload;
};

export default useDownloadPdf;
