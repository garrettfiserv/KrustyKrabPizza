import java.sql.*;
import java.util.Properties;
import  net.snowflake.client.jdbc.SnowflakeDriver;

// jdbc:snowflake://<ACCOUNTADMIN>.snowflakecomputing.com/?<connection_params>

public class app {
    public static void main(String[] args) throws SQLException {
        Properties properties = new java.util.Properties();
        properties.put("user", "GARRETTBOSCOE");
        properties.put("password", "Fiservrules123");
        properties.put("account", "vcb70660.AWS_US_EAST_1");
        properties.put("warehouse", "COMPUTE_WH");
        properties.put("db", "KRUSTY_KRAB_PIZZA");
        properties.put("schema", "PIZZERIA");
        properties.put("role", "ACCOUNTADMIN");

        String jdbcUrl = "jdbc:snowflake://vcb70660.aws-us-east-1.snowflakecomputing.com/";
        String selectSQL = "SELECT * FROM KRUSTY_KRAB_PIZZA.PIZZERIA.CUSTOMER";

        System.out.println("Here we go!");

        try{
            Connection connection = DriverManager.getConnection(jdbcUrl, properties);
            System.out.println("connected");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(selectSQL);

            while(rs.next()){
                System.out.println(rs.getString("PHONENUMBER"));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }


            }
}
