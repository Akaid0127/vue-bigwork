import java.util.Objects;

public class suanfa {
    public static void main(String[] args) {
        String ip = "114.2.";
        String[] arr1 = ip.split("\\.", 4);
        int strLength = arr1.length;
        String[] arr2 = new String[4];
        for (int i = 0; i < strLength; i++) {
            System.out.println(arr1[i]);
            if (Objects.equals(arr1[i], "")){
                arr2[i]="1";
                continue;
            }
            arr2[i] = arr1[i];
        }
        for (int i = strLength; i < 4; i++) {
            arr2[i] = "1";
        }
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < arr2.length; i++) {
            sb.append(arr2[i]);
            if ((i + 1) != arr2.length) {
                sb.append(".");
            }
        }
        System.out.println(sb.toString());
    }
}
