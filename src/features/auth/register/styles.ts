import styled from 'styled-components';

export const RegisterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* Đã xóa màu nền ở đây để không che mất ảnh */
`;

// Layer 1: Đỏ mận dưới cùng
export const BaseBackground = styled.div`
  position: absolute;
  inset: 0;
  background-color: #502121; 
  z-index: -3;
`;

// Layer 2: Trống đồng
export const BackgroundPattern = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  opacity: 0.15; /* Tăng độ nét lên 15% cho dễ nhìn */
  z-index: -2;
`;

// Layer 3: Ám vàng kim loại
export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(235, 43, 29, 0.15); 
  z-index: -1;
`;

export const FormBox = styled.div`
  width: 100%;
  max-width: 480px;
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 1;
`;