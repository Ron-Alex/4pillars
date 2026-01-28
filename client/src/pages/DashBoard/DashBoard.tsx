import Editor from "../../components/Editor/Editor";

interface DashBoardProps {
  handleSubmit: (note: string) => void;
}

const DashBoard = ({handleSubmit}: DashBoardProps) => {

    return (
        <div id="dashboard_page">
            <h1 className="text-3xl font-bold">DashBoard Page</h1>
            <h3 className="text-lg">Welcome, User! How has your day been?</h3>
                <Editor onSubmitNote={handleSubmit}/>
        </div>
    )
}
export default DashBoard;