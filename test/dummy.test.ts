import { DummyForCommit } from "../src/dummy"

test("Deve rodar o teste da aplicação", () => {
  const dummy = new DummyForCommit();
  expect(dummy.testeCommit()).toBe("App funcionando!");
})