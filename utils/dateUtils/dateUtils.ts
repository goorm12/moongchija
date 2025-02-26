const getFormattedDateParts = (date: Date) => {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dayName = dayNames[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return { year, month, day, dayName, hours, minutes };
};

export const formatDate = (date: Date): string => {
  const { year, month, day, dayName } = getFormattedDateParts(date);
  return `${year}.${month}.${day}(${dayName})`;
};

export const formatTime = (date: Date): string => {
  const { year, month, day, dayName, hours, minutes } =
    getFormattedDateParts(date);
  return `${year}.${month}.${day}(${dayName}) ${hours}:${minutes}`;
};

export const calculateCountdown = (startDate: Date): string => {
  const today = new Date();
  const daysDiff = startDate.getDate() - today.getDate();

  if (daysDiff < 0) return "종료"; // 이미 지난 날짜
  if (daysDiff === 0) return "D-DAY"; // 당일
  return `D-${daysDiff}`;
};

export const formatToISOStringWithKST = (date: Date) => {
  const kstToUtc = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return kstToUtc.toISOString();
};
