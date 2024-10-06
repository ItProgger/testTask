import { useState } from "react";
import {
  Wrapper,
  Container,
  Item,
  Title,
  SubItem,
  Button,
  Block,
  SubTitle,
} from "./style";

interface IList {
  title: string;
  subTitles: string[];
}

function App() {
  const [list, setList] = useState<IList[]>([
    {
      title: "Список 1",
      subTitles: ["подсписок 1"],
    },
    {
      title: "Список 2",
      subTitles: ["подсписок 2", "подсписок 3"],
    },
    {
      title: "Список 3",
      subTitles: ["подсписок 4", "подсписок 5"],
    },
  ]);

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggleItem = (index: number) => {
    if (activeIndex == index) {
      setActiveIndex(null);
      return false;
    }
    setActiveIndex(index);
  };

  const handleAddSubItem = (
    e: { stopPropagation: () => void },
    index: number
  ) => {
    let record: string | null = prompt("Добавить запись");
    e.stopPropagation();

    if (record) {
      const result = list.map((item, key) => {
        if (key === index) {
          return {
            title: item.title,
            subTitles: item.subTitles.concat(`${record}`),
          };
        }
        return item;
      });
      setList(result);
    }
  };

  const handleDeleteSubItem = (
    e: { stopPropagation: () => void },
    index: number,
    idx: number
  ) => {
    e.stopPropagation();

    const result = list.map((item, key) => {
      if (key === index) {
        return {
          title: item.title,
          subTitles: item.subTitles.filter((e, i) => i !== idx),
        };
      }
      return item;
    });
    setList(result);
  };

  return (
    <Wrapper>
      <Container>
        {list.map((item, index) => {
          return (
            <Item onClick={() => handleToggleItem(index)} key={`${index}`}>
              <Block>
                <Title>{item.title}</Title>
                <Button onClick={(e) => handleAddSubItem(e, index)}>
                  Добавить
                </Button>
              </Block>

              {activeIndex === index &&
                item.subTitles.map((sub, idx) => {
                  return (
                    <SubItem key={`${index}${idx}`}>
                      <SubTitle>{sub}</SubTitle>
                      <Button
                        background="red"
                        onClick={(e) => handleDeleteSubItem(e, index, idx)}
                      >
                        Удалить
                      </Button>
                    </SubItem>
                  );
                })}
            </Item>
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default App;
