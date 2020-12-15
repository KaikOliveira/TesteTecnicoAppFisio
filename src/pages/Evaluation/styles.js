import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background:#f9f9f9;
  flex:1 ;
  justify-content: space-between;
`;

export const Header = styled.View`
  height: 80px;
  background:#E84A5B;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
`;

export const IconHeader = styled.TouchableOpacity``;

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

export const Itens = styled.TouchableOpacity`
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
  background:#f9f9f9;
  flex: 1
`;

export const IconsTop = styled.View`
  justify-content: space-between;
  flex-direction: row;
  background-color: #f9f9f9;
  padding: 20px 35px;
`;

export const ChartConteiner = styled.View`
  align-items: center;
  margin-top: 45px;
`;

export const Bar = styled.View`
  height: 80px;
  width: 90%;
  background-color: #D4D4D4;
  border-radius: 40px;
  justify-content: center;
`;

export const PointLeft = styled.View`
  background-color: #444;
  width: 1px;
  height: 130px;
  position: absolute;
  left: 15%;
`;

export const PointRight = styled.View`
  background-color: #444;
  width: 1px;
  height: 130px;
  position: absolute;
  right: 15%;
`;

export const LabelLeft = styled.Text`
  font-size: 16px;
  color: #444;
  position: absolute;
  left: 15%;
  top: 110px;
`;

export const LabelRight = styled.Text`
  font-size: 16px;
  color: #444;
  position: absolute;
  right: 14.6%;
  top: 110px;
`;

export const TimerConteiner = styled.View`
  top: 130px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Timer = styled.Text`
  margin-left: 8px;
  font-size: 22px;
  color: #444;
`;

export const EndContentCenter = styled.View`
  align-items: center;
  flex: 1;
`;

export const ExerciseListConteiner = styled.View`
  background-color: #fff;
  height: 280px;
  width: 90%;
  padding: 2px;
  border-radius: 10px;
`;

export const ButtonExercise = styled.TouchableOpacity`
  margin-bottom: 7px;
  margin-left: 3px;
  width: 98%;
  padding: 10px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const TitleExercise = styled.Text`
  font-size: 25px;
  color: #000;
`;

export const Buttons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  bottom:2%;
  padding: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 43.5%;
  margin: 0 15px;
  border-radius: 20px;
  background-color: #E84A5B;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const NameButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-left: 10px;
`;