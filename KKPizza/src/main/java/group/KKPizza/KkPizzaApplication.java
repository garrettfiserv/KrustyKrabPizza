package group.KKPizza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.*;
import java.sql.*;

@SpringBootApplication
public class KkPizzaApplication {

    public static void main(String[] args) throws IOException {
        SpringApplication.run(KkPizzaApplication.class, args);
        Environment env = new Environment();
        String pass = env.getPassword();
        String jdbcUrl = "jdbc:snowflake://VCB70660.us-east-1.snowflakecomputing.com/?warehouse=COMPUTE_WH&db=KRUSTY_KRAB_PIZZA&schema=PIZZERIA&user=garrettboscoe&password="
                + pass
                + "&role=ACCOUNTADMIN&CLIENT_RESULT_COLUMN_CASE_INSENSITIVE=true&CLIENT_TIMESTAMP_TYPE_MAPPING=TIMESTAMP_NTZ&JDBC_QUERY_RESULT_FORMAT=JSON";
        String selectSQL = "SELECT * FROM KRUSTY_KRAB_PIZZA.PIZZERIA.EMPLOYEE";

        try {
            Connection connection = DriverManager.getConnection(jdbcUrl);
            System.out.println("connected");
            Statement stmt = connection.createStatement();
            ResultSet rs = stmt.executeQuery(selectSQL);

            while (rs.next()) {
                System.out.print(rs.getString("EMPLOYEEID") + " ");
                System.out.print(rs.getString("PHONENUMBER") + " ");
                System.out.print(rs.getString("NAME") + " ");
                System.out.print(rs.getString("TITLE") + " ");
                System.out.print(rs.getString("PASSWORD") + " ");
                System.out.print(rs.getString("ISADMIN") + " ");
                System.out.println();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}