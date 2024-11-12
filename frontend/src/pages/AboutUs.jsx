import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AboutUs() {
  return (
    <div className="sm:w-4/5 w-full mx-auto h-full my-4 shadow-lg p-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">About StudyNotion</h1>
      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="mb-4">
          Welcome to <strong>StudyNotion</strong>, your number one source for all things e-learning. We're dedicated to giving you the very best of online courses, with a focus on quality, accessibility, and affordability.
        </p>
        <p className="mb-4">
          Founded in 2024, StudyNotion has come a long way from its beginnings. When we first started out, our passion for making education accessible to everyone drove us to start our own e-learning platform.
        </p>
        <p className="mb-4">
          We now serve students all over the world and are thrilled that we're able to turn our passion into our own website. We hope you enjoy our courses as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="mb-4">
          Sincerely,
          <br />
          The StudyNotion Team
        </p>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
        limit={1}
      />
    </div>
  );
}