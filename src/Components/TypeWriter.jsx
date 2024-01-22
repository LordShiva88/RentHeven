import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        I am {" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["Programmer", "Developer", "Code", "Repeat!"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;