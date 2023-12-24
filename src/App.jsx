import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Root from "./routes/root";
import Basic from "./routes/basic";
import Validation from "./routes/validation";
import ExistingForm from "./routes/existing-form";
import UiLibraries from "./routes/ui-libraries";
import ControlledInputs from "./routes/controlled-inputs";
import SchemaValidation from "./routes/schema-validation";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "/basic", element: <Basic /> },
      {
        path: "/validation",
        element: <Validation />,
      },
      {
        path: "/existing-form",
        element: <ExistingForm />,
      },
      {
        path: "/ui-libraries",
        element: <UiLibraries />,
      },
      {
        path: "controlled-inputs",
        element: <ControlledInputs />,
      },
      {
        path: "/schema-validation",
        element: <SchemaValidation />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
