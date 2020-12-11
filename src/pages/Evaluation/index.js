import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { 
  FontAwesome, 
  MaterialCommunityIcons, 
  Feather, 
  Ionicons,
  FontAwesome5,
  MaterialIcons
} from '@expo/vector-icons';

import { 
  Wrapper,
  TrainingConteiner, 
  Itens, 
  Title, 
  Score,
  ContentConteiner,
  IconsTop,
  ChartConteiner,
  Bar,
  PointLeft,
  PointRight,
  LabelLeft,
  LabelRight,
  TimerConteiner,
  Timer,
  ExerciseListConteiner,
  ButtonExercise,
  TitleExercise,
  EndContentCenter
} from './styles';

export default function Evaluation(){

  // Dados do FlatList -- Lista de Exercicios
  const DATA = [
    {
      id: "1",
      title: "Abdominal",
    },
    {
      id: "2",
      title: "Flexão de cotovelo",
    },
    {
      id: "3",
      title: "Pular corda",
    },
    {
      id: "4",
      title: "Agachamento",
    },
    {
      id: "5",
      title: "Elevação de quadril",
    },
    {
      id: "6",
      title: "Ponte",
    },
    {
      id: "7",
      title: "Elevação das pontas dos pés",
    },
    
  ];

  const Item = ({ item, onPress, style }) => (
    <ButtonExercise onPress={onPress} style={ style} >
      <TitleExercise >{item.title}</TitleExercise>
    </ButtonExercise>
  );

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#b1b1b1" : "#e9e9e9";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return(
    <Wrapper>
      <TrainingConteiner>
        <Itens>
          <FontAwesome name="flag" size={24} color="#E84A5B" />
          <Title>Series</Title>
          <Score>0/1</Score>
        </Itens>
        
        <Itens>
          <Feather name="repeat" size={24} color="#E84A5B" />
          <Title>Repetições</Title>
          <Score>0/1</Score>
        </Itens>

        <Itens>
          <MaterialCommunityIcons name="weight-lifter" size={24} color="#E84A5B" />
          <Title>Peso</Title>
          <Score>0.00kg</Score>
        </Itens>

        <Itens>
          <MaterialCommunityIcons name="arm-flex" size={24} color="#E84A5B" />
          <Title>Máximo</Title>
          <Score>0.00kg</Score>
        </Itens>
      </TrainingConteiner>

      <ContentConteiner>
        <IconsTop>
          <Ionicons name="settings-sharp" size={24} color="#E84A5B" />

          <FontAwesome5 name="chart-area" size={24} color="#E84A5B" />
        </IconsTop>

        <ChartConteiner>
          <Bar>
            <PointLeft />

            <PointRight />
          </Bar>

          <LabelLeft>3.00kg</LabelLeft>
          <LabelRight>30.00kg</LabelRight> 
        </ChartConteiner>

        <TimerConteiner>
          <MaterialIcons name="timer" size={24} color="#E84A5B" />
          <Timer>00m 00s</Timer>
        </TimerConteiner>

      </ContentConteiner>

      <EndContentCenter>

        <ExerciseListConteiner>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </ExerciseListConteiner>

      </EndContentCenter>
    </Wrapper>

  );
}