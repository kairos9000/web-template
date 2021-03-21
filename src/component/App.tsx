import { Demo } from "./Demo";

interface IProps {}

export const App = (props: IProps) => {
    const {} = props;

    return (
        <>
            <h1>Hello World</h1>
            <section>
                <h2>Used Technologies</h2>
                <ul>
                    <li>Webpack 5.27</li>
                    <li>React 17.0 + JSX</li>
                    <li>TypeScript 4.2</li>
                    <li>SCSS</li>
                    <li>Yarn</li>
                </ul>
            </section>
            <section>
                <h2>Demo</h2>
                <Demo />
            </section>
        </>
    );
};
