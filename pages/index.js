import Head from "next/head";

export default class extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div>
        <Head>
          <title>Home | Bong Store</title>
        </Head>
        <h1>Index</h1>
      </div>
    );
  }
}
