import React from "react";
import styles from "./CircleIndicator.module.scss";

interface CircleIndicatorProps {
  total: number; // 총 동그라미 개수
  activeIndex: number; // 다른 색상을 가질 동그라미의 인덱스 (0부터 시작)
}

const CircleIndicator: React.FC<CircleIndicatorProps> = ({ total, activeIndex }) => {
  return (
    <div className={styles.circleContainer}>
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`${styles.circle} ${index === activeIndex ? styles.active : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default CircleIndicator;
