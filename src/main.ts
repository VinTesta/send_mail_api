import ServerApplication from "./server/server-application";

(async (): Promise<void> => {
  await runApplication();
})();

async function runApplication(): Promise<void> {
  const serverApplication: ServerApplication = new ServerApplication(); 
  await serverApplication.run();
}
