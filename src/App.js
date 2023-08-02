import './App.css';
import AppLayout from './components/layout';
import Question from './components/qestion';
import FirstPage from './pages/first_page';
import ResultPage from './pages/result';


function App() {
  return (
   <AppLayout>
    <FirstPage />
    {/* <ResultPage /> */}
   </AppLayout>
  );
}

export default App;
// {
//  questions.map((current, index) => (
//   <Question
//    text={current.question}
//    options={current.options}
//    correct_option_pos={current.correctAnswer}
//    key={"question_" + index}
//   />
//  ));
// }
// <div id="btn-container">
//  <Button type="primary " size={"large"}>
//   Submit Quiz
//  </Button>
// </div>;