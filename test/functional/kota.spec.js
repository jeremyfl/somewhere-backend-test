const { test, trait } = use("Test/Suite")("Kota");
const Kota = use("App/Models/Kota");

trait("Test/ApiClient");

test("Find kota 1", async ({ client }) => {
  await Kota.find(1);

  const response = await client.get("/search/cities?id=1").end();

  response.assertStatus(200);
  response.assertJSONSubset({
    data: {
      id: 1,
      province_id: 21,
      province: "Nanggroe Aceh Darussalam (NAD)",
      type: "Kabupaten",
      city_name: "Aceh Barat",
      postal_code: 23681,
      created_at: "2019-01-12 01:06:34",
      updated_at: "2019-01-12 01:06:34"
    }
  });
});
