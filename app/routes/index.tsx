
import { Form, useActionData } from "@remix-run/react";



export default function Index() {
  const b = useActionData();
  console.log(b)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Form reloadDocument method="post" action="/download">
        <button type="submit">Go</button>
      </Form>
    </div>
  );
}
