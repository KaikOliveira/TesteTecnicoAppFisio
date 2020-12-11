import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background:#e5e5e5;
  flex:1 ;
`;

export const TrainingConteiner = styled.View`
  height: 100px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 40px;
  border-bottom-width: 0.3px;
  border-radius: 10px;
  border-color: #555;
`;

export const Itens = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #444;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const Score = styled.Text`
  font-size: 12px;
  color: #444;
`;

export const ContentConteiner = styled.View`
  background:#c0c0c0;
  flex: 1;
`;

export const IconsTop = styled.View`
  justify-content: space-between;
  flex-direction: row;
  background-color: #fff;
  padding: 20px 35px;
`;