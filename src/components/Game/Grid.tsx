import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 3px;
    margin: 0 auto;
  }

  td {
    position: relative;
    width: 5px;
    height: 5px;
    border: 2px solid #152c59;
    border-radius: 15px;
  }

  td:hover {
    background: #538daa;
  }

  td div {
    width: 5px;
    height: 5px;
  }

  .numbers,
  .letters {
    text-align: center;
    font-size: 20px;
    font-family: "Baloo Bhaina";
    color: black;
    height: 20px;
    width: 20px;
    border: none;
  }
`;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   text-align: center;
//   justify-items: center;
// `;

export const GridObject = () => {
  return (
    <GridContainer>
      <table>
        <tr>
          <th className="numbers"></th>
          <th className="numbers">1</th>
          <th className="numbers">2</th>
          <th className="numbers">3</th>
          <th className="numbers">4</th>
          <th className="numbers">5</th>
          <th className="numbers">6</th>
          <th className="numbers">7</th>
          <th className="numbers">8</th>
          <th className="numbers">9</th>
          <th className="numbers">10</th>
        </tr>

        <tr>
          <th className="letters">A</th>
          <td>
            <div id="00"></div>
          </td>
          <td>
            <div id="01"></div>
          </td>
          <td>
            <div id="02"></div>
          </td>
          <td>
            <div id="03"></div>
          </td>
          <td>
            <div id="04"></div>
          </td>
          <td>
            <div id="05"></div>
          </td>
          <td>
            <div id="06"></div>
          </td>
          <td>
            <div id="07"></div>
          </td>
          <td>
            <div id="08"></div>
          </td>
          <td>
            <div id="09"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">B</th>
          <td>
            <div id="10"></div>
          </td>
          <td>
            <div id="11"></div>
          </td>
          <td>
            <div id="12"></div>
          </td>
          <td>
            <div id="13"></div>
          </td>
          <td>
            <div id="14"></div>
          </td>
          <td>
            <div id="15"></div>
          </td>
          <td>
            <div id="16"></div>
          </td>
          <td>
            <div id="17"></div>
          </td>
          <td>
            <div id="18"></div>
          </td>
          <td>
            <div id="19"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">C</th>
          <td>
            <div id="20"></div>
          </td>
          <td>
            <div id="21"></div>
          </td>
          <td>
            <div id="22"></div>
          </td>
          <td>
            <div id="23"></div>
          </td>
          <td>
            <div id="24"></div>
          </td>
          <td>
            <div id="25"></div>
          </td>
          <td>
            <div id="26"></div>
          </td>
          <td>
            <div id="27"></div>
          </td>
          <td>
            <div id="28"></div>
          </td>
          <td>
            <div id="29"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">D</th>
          <td>
            <div id="30"></div>
          </td>
          <td>
            <div id="31"></div>
          </td>
          <td>
            <div id="32"></div>
          </td>
          <td>
            <div id="33"></div>
          </td>
          <td>
            <div id="34"></div>
          </td>
          <td>
            <div id="35"></div>
          </td>
          <td>
            <div id="36"></div>
          </td>
          <td>
            <div id="37"></div>
          </td>
          <td>
            <div id="38"></div>
          </td>
          <td>
            <div id="39"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">E</th>
          <td>
            <div id="40"></div>
          </td>
          <td>
            <div id="41"></div>
          </td>
          <td>
            <div id="42"></div>
          </td>
          <td>
            <div id="43"></div>
          </td>
          <td>
            <div id="44"></div>
          </td>
          <td>
            <div id="45"></div>
          </td>
          <td>
            <div id="46"></div>
          </td>
          <td>
            <div id="47"></div>
          </td>
          <td>
            <div id="48"></div>
          </td>
          <td>
            <div id="49"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">F</th>
          <td>
            <div id="50"></div>
          </td>
          <td>
            <div id="51"></div>
          </td>
          <td>
            <div id="52"></div>
          </td>
          <td>
            <div id="53"></div>
          </td>
          <td>
            <div id="54"></div>
          </td>
          <td>
            <div id="55"></div>
          </td>
          <td>
            <div id="56"></div>
          </td>
          <td>
            <div id="57"></div>
          </td>
          <td>
            <div id="58"></div>
          </td>
          <td>
            <div id="59"></div>
          </td>
        </tr>
        <tr>
          <th className="letters">G</th>
          <td>
            <div id="60"></div>
          </td>
          <td>
            <div id="61"></div>
          </td>
          <td>
            <div id="62"></div>
          </td>
          <td>
            <div id="63"></div>
          </td>
          <td>
            <div id="64"></div>
          </td>
          <td>
            <div id="65"></div>
          </td>
          <td>
            <div id="66"></div>
          </td>
          <td>
            <div id="67"></div>
          </td>
          <td>
            <div id="68"></div>
          </td>
          <td>
            <div id="69"></div>
          </td>
        </tr>

        <tr>
          <th className="letters">H</th>
          <td>
            <div id="60"></div>
          </td>
          <td>
            <div id="61"></div>
          </td>
          <td>
            <div id="62"></div>
          </td>
          <td>
            <div id="63"></div>
          </td>
          <td>
            <div id="64"></div>
          </td>
          <td>
            <div id="65"></div>
          </td>
          <td>
            <div id="66"></div>
          </td>
          <td>
            <div id="67"></div>
          </td>
          <td>
            <div id="68"></div>
          </td>
          <td>
            <div id="69"></div>
          </td>
        </tr>

        <tr>
          <th className="letters">I</th>
          <td>
            <div id="60"></div>
          </td>
          <td>
            <div id="61"></div>
          </td>
          <td>
            <div id="62"></div>
          </td>
          <td>
            <div id="63"></div>
          </td>
          <td>
            <div id="64"></div>
          </td>
          <td>
            <div id="65"></div>
          </td>
          <td>
            <div id="66"></div>
          </td>
          <td>
            <div id="67"></div>
          </td>
          <td>
            <div id="68"></div>
          </td>
          <td>
            <div id="69"></div>
          </td>
        </tr>

        <tr>
          <th className="letters">J</th>
          <td>
            <div id="60"></div>
          </td>
          <td>
            <div id="61"></div>
          </td>
          <td>
            <div id="62"></div>
          </td>
          <td>
            <div id="63"></div>
          </td>
          <td>
            <div id="64"></div>
          </td>
          <td>
            <div id="65"></div>
          </td>
          <td>
            <div id="66"></div>
          </td>
          <td>
            <div id="67"></div>
          </td>
          <td>
            <div id="68"></div>
          </td>
          <td>
            <div id="69"></div>
          </td>
        </tr>
      </table>
    </GridContainer>
  );
};
