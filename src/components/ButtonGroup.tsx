import styled from "styled-components";

const Styled = styled.div`
  letter-spacing: 0.5px;
  margin: 10px;
  color: white;
  font-size: 32px;
  border: 1.5px solid #e0314b;
  border-radius: 5px;
  display: inline-flex;
  border-radius: 5px;
  border: 1px solid #333;
  button {
    border-style: none;
    background-color: transparent;
    overflow: hidden;
    width: auto;
    height: min-content;
    margin: 6px;
    padding: 0 0 0 0;
    cursor: pointer;
  }
`;

function ButtonGroup({
  buttons,
  action,
  current,
}: {
  buttons: number[];
  action: (cb: number) => void;
  current: number;
}) {
  return (
    <Styled>
      {buttons.map((value: number, index: number) => {
        return (
          <button
            key={index}
            type="button"
            value={value}
            onClick={() => action(value)}
            disabled={current === value}
            style={current === value ? { cursor: "none" } : {}}
          >
            {value} day{value > 1 ? "s" : ""}
          </button>
        );
      })}
    </Styled>
  );
}

export { ButtonGroup };
