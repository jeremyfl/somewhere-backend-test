const { test, trait } = use("Test/Suite")("Provinsi");
const Provinsi = use("App/Models/Provinsi");

trait("Test/ApiClient");

test("Find provinsi 1", async ({ client }) => {
  await Provinsi.find(1);

  const response = await client.get("/search/provinces?id=1").end();

  response.assertStatus(200);
  response.assertJSONSubset({
    data: {
      id: 1,
      name: "Bali",
      created_at: "2019-01-12 01:06:34",
      updated_at: "2019-01-12 01:06:34"
    }
  });
});
