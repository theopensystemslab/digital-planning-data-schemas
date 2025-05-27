/**
 * Utility function to convert a date string to a YYYY-MM-DD formatted date string
 * @param dateString
 * @returns YYYY-MM-DD formatted date string
 */
export const formatDateToYYYYMMDD = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
