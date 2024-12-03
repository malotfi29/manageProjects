import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-bold text-xl">پروژه های شما</h2>
      <button
        onClick={() => setIsAddOpen(true)}
        className="btn btn--primary flex items-center"
      >
        <IoIosAdd className="w-6 h-6 font-bold" />
        <span>اضافه کردن پروژه </span>
      </button>
      <Modal
            open={isAddOpen}
            title="پروژه جدید"
            onClose={() => setIsAddOpen(false)}
          >
            <CreateProjectForm onClose={()=>setIsAddOpen(false)}/>
          </Modal>
    </div>
  );
}

export default ProjectsHeader;
