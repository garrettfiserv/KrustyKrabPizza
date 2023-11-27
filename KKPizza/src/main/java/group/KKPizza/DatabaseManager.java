package group.KKPizza;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseManager {

    private static Connection connection = null;

    public static Connection getConnection() {
        Environment env = new Environment();
        String pass = env.getPass();
        if (connection == null) {
            try {
                // Initialize the connection only if it's null
                String jdbcUrl = "jdbc:snowflake://KG89117.ca-central-1.aws.snowflakecomputing.com/?warehouse=COMPUTE_WH&db=KRUSTY_KRAB_PIZZA&schema=PIZZERIA&user=kavishdesai&password="
                        + pass
                        + "&role=ACCOUNTADMIN&CLIENT_RESULT_COLUMN_CASE_INSENSITIVE=true&CLIENT_TIMESTAMP_TYPE_MAPPING=TIMESTAMP_NTZ&JDBC_QUERY_RESULT_FORMAT=JSON";
                connection = DriverManager.getConnection(jdbcUrl);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return connection;
    }
}
