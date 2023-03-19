import "../../styles/Block/block.css";

interface Props {
  contentType: "main" | "cv";
  title: string;
  content: string;
  images?: string[];
}

const Block: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="block-container"
      style={{ height: props.contentType === "main" ? "100vh" : "" }}
    >
      {props.contentType === "main" &&
        (props.images as string[]).length >= 1 && (
          <main>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div
              className="block-images"
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${
                  (props.images as string[]).length <= 4
                    ? (props.images as string[]).length
                    : 4
                }, 1fr)`,
                justifyItems: "center",
                margin: "auto",
                width: (props.images as string[]).length <= 1 ? "50%" : "100%",
              }}
            >
              {(props.images as string[]).map((img, i) => (
                <img src={img} width="100%" key={i} />
              ))}
            </div>
          </main>
        )}

      {props.contentType === "cv" && (
        <code>
          Test
          <p>Test</p>
        </code>
      )}
    </div>
  );
};

export default Block;
